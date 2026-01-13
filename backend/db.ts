import { supabase } from '../lib/supabase';
import { Database } from './schema';

type WhereOperator = '=' | '!=' | '>' | '<' | '>=' | '<=' | 'in';

function applyWhere(query: any, column: string, op: WhereOperator, value: unknown) {
  if (op === '=') return query.eq(column, value);
  if (op === '!=') return query.neq(column, value);
  if (op === '>') return query.gt(column, value);
  if (op === '<') return query.lt(column, value);
  if (op === '>=') return query.gte(column, value);
  if (op === '<=') return query.lte(column, value);
  if (op === 'in') return query.in(column, value as any[]);
  return query.eq(column, value);
}

export const db = {
  selectFrom: (table: keyof Database) => {
    const whereConditions: { column: string; op: WhereOperator; value: unknown }[] = [];
    
    const createSelectAllWithWhere = () => {
      const instance: any = {
        orderBy: (column: string, order: 'asc' | 'desc') => ({
          limit: (limit: number) => ({
            execute: async () => {
              let q = supabase.from(table as string).select('*');
              whereConditions.forEach(({ column: col, op, value }) => {
                q = applyWhere(q, col, op, value);
              });
              q = q.order(column, { ascending: order === 'asc' }).limit(limit);
              const { data, error } = await q;
              if (error) throw error;
              return data || [];
            },
          }),
        }),
        where: (column: string, op: WhereOperator, value: unknown) => {
          whereConditions.push({ column, op, value });
          return instance;
        },
        executeTakeFirst: async () => {
          let q = supabase.from(table as string).select('*');
          whereConditions.forEach(({ column: col, op, value }) => {
            q = applyWhere(q, col, op, value);
          });
          const { data, error } = await q.single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        },
        executeTakeFirstOrThrow: async () => {
          let q = supabase.from(table as string).select('*');
          whereConditions.forEach(({ column: col, op, value }) => {
            q = applyWhere(q, col, op, value);
          });
          const { data, error } = await q.single();
          if (error) throw error;
          return data;
        },
        execute: async () => {
          let q = supabase.from(table as string).select('*');
          whereConditions.forEach(({ column: col, op, value }) => {
            q = applyWhere(q, col, op, value);
          });
          const { data, error } = await q;
          if (error) throw error;
          return data || [];
        },
      };
      return instance;
    };

    const createSelectWithWhere = (cols: string) => {
      const instance: any = {
        orderBy: (column: string, order: 'asc' | 'desc') => ({
          limit: (limit: number) => ({
            execute: async () => {
              let q = supabase.from(table as string).select(cols);
              whereConditions.forEach(({ column: col, op, value }) => {
                q = applyWhere(q, col, op, value);
              });
              q = q.order(column, { ascending: order === 'asc' }).limit(limit);
              const { data, error } = await q;
              if (error) throw error;
              return data || [];
            },
          }),
        }),
        where: (column: string, op: WhereOperator, value: unknown) => {
          whereConditions.push({ column, op, value });
          return instance;
        },
        execute: async () => {
          let q = supabase.from(table as string).select(cols);
          whereConditions.forEach(({ column: col, op, value }) => {
            q = applyWhere(q, col, op, value);
          });
          const { data, error } = await q;
          if (error) throw error;
          return data || [];
        },
        executeTakeFirst: async () => {
          let q = supabase.from(table as string).select(cols);
          whereConditions.forEach(({ column: col, op, value }) => {
            q = applyWhere(q, col, op, value);
          });
          const { data, error } = await q.single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        },
      };
      return instance;
    };

    return {
      selectAll: () => createSelectAllWithWhere(),
      select: (columns: string[] | string) => {
        const cols = Array.isArray(columns) ? columns.join(',') : columns;
        return createSelectWithWhere(cols);
      },
    };
  },
  insertInto: (table: keyof Database) => ({
    values: (values: Record<string, unknown> | Record<string, unknown>[]) => ({
      returningAll: () => ({
        executeTakeFirstOrThrow: async () => {
          const { data, error } = await supabase
            .from(table as string)
            .insert(values)
            .select()
            .single();
          if (error) throw error;
          return data;
        },
        executeTakeFirst: async () => {
          const { data, error } = await supabase
            .from(table as string)
            .insert(values)
            .select()
            .single();
          if (error && error.code !== 'PGRST116') throw error;
          return data;
        },
        execute: async () => {
          const { data, error } = await supabase
            .from(table as string)
            .insert(values)
            .select();
          if (error) throw error;
          return data || [];
        },
      }),
    }),
  }),
  updateTable: (table: keyof Database) => ({
    set: (values: Record<string, unknown>) => ({
      where: (column: string, op: WhereOperator, value: unknown) => ({
        returningAll: () => ({
          executeTakeFirst: async () => {
            let q = supabase.from(table as string).update(values);
            q = applyWhere(q, column, op, value);
            const { data, error } = await q.select().single();
            if (error && error.code !== 'PGRST116') throw error;
            return data;
          },
          executeTakeFirstOrThrow: async () => {
            let q = supabase.from(table as string).update(values);
            q = applyWhere(q, column, op, value);
            const { data, error } = await q.select().single();
            if (error) throw error;
            return data;
          },
        }),
        execute: async () => {
          let q = supabase.from(table as string).update(values);
          q = applyWhere(q, column, op, value);
          const { error } = await q;
          if (error) throw error;
          return [];
        },
      }),
    }),
  }),
  deleteFrom: (table: keyof Database) => ({
    where: (column: string, op: WhereOperator, value: unknown) => ({
      execute: async () => {
        let q = supabase.from(table as string).delete();
        q = applyWhere(q, column, op, value);
        const { error } = await q;
        if (error) throw error;
        return [];
      },
    }),
  }),
};

export type { Database } from './schema';
