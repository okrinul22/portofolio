<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/about', fn() => Inertia::render('About'));
Route::get('/projects', fn() => Inertia::render('Projects'));
Route::get('/contact', fn() => Inertia::render('Contact'));
