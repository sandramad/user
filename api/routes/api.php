<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\RegisterController@login');
Route::resource('users', 'API\UserListController');

/*
 * [POST]   http://127.0.0.1:8000/api/login - logowanie
 * [POST]   http://127.0.0.1:8000/api/register - rejestracja
 * [GET]    http://127.0.0.1:8000/api/users - lista userów
 * [PUT]    http://127.0.0.1:8000/api/users/{id} - edycja usera o id
 * [DELETE] http://127.0.0.1:8000/api/users/{id} - usuwanie usera o id
 */
