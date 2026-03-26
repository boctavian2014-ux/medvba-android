# MEDVBA - Push Supabase Schema Script
# Run this script to automatically push the database schema

param(
    [string]$ProjectRef = "",
    [string]$DatabaseUrl = ""
)

Write-Host "MEDVBA Supabase Schema Push Script" -ForegroundColor Cyan
Write-Host ""

# Check if Supabase CLI is installed
$supabasePath = Get-Command supabase -ErrorAction SilentlyContinue

if ($supabasePath) {
    $version = supabase --version
    Write-Host "Supabase CLI found: $version" -ForegroundColor Green
    Write-Host ""
    
    # Check if logged in
    Write-Host "Checking Supabase login..." -ForegroundColor Yellow
    supabase projects list 2>$null | Out-Null
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Please login: supabase login" -ForegroundColor Yellow
    }
    
    # Link project if provided
    if ($ProjectRef) {
        Write-Host "Linking project: $ProjectRef" -ForegroundColor Yellow
        supabase link --project-ref $ProjectRef --yes
    }
    
    # Push schema
    Write-Host "Pushing schema..." -ForegroundColor Cyan
    supabase db push --yes
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Success!" -ForegroundColor Green
    }
}
elseif ($DatabaseUrl) {
    Write-Host "Using psql to push schema..." -ForegroundColor Yellow
    
    if (Test-Path "schema.sql") {
        psql $DatabaseUrl -f schema.sql
        Write-Host "Success!" -ForegroundColor Green
    }
    else {
        Write-Host "schema.sql not found in current folder" -ForegroundColor Red
    }
}
else {
    Write-Host "Supabase CLI not found and no Database URL provided" -ForegroundColor Red
    Write-Host ""
    Write-Host "To install Supabase CLI:" -ForegroundColor Yellow
    Write-Host "  npm install -g supabase"
    Write-Host ""
    Write-Host "OR run SQL manually:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://supabase.com/dashboard"
    Write-Host "  2. Open SQL Editor"
    Write-Host "  3. Copy contents of schema.sql"
}
