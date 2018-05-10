<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('createRequest', 'RequestController@getCreateView');

Route::post('createRequest',
    ['as' => 'createRequest',
     'uses' => 'RequestController@createRequest'
]);

Route::get('filter/{kindOfRequests?}/{status?}', 'RequestFilterController@myRequest');

Route::get('editRequest/{id}', 'RequestEditController@getEditView');
Route::post('editRequest',
    [   'as' => 'editRequest',
        'uses' => 'RequestEditController@editRequest'
    ]);

Route::get('/filter', function () {
    return view('filter');
});
Route::get("/userInfo", 'UserController@getProfile');
Route::get('search/autocomplete/{type}/{id?}', 'SearchController@autocomplete');
Route::get('image/{filename?}','RequestEditController@getImage');

Route::post('comment/store','CommentController@store')->name('comment.store');

Route::get('/reload', 'RequestFilterController@reload');