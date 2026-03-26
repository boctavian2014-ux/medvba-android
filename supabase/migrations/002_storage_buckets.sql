-- Create storage bucket for profile photos
insert into storage.buckets (id, name, public)
values ('profile-photos', 'profile-photos', true)
on conflict (id) do nothing;

-- Policy: Allow users to upload their own profile photos
create policy "Users can upload their own profile photos"
on storage.objects for insert
with check (
  bucket_id = 'profile-photos' and
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Allow users to update their own profile photos
create policy "Users can update their own profile photos"
on storage.objects for update
using (
  bucket_id = 'profile-photos' and
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Allow users to delete their own profile photos
create policy "Users can delete their own profile photos"
on storage.objects for delete
using (
  bucket_id = 'profile-photos' and
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Allow public read access to profile photos
create policy "Profile photos are publicly accessible"
on storage.objects for select
using ( bucket_id = 'profile-photos' );
