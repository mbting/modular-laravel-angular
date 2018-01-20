<?php

Route::group(['prefix' => 'api'], function () {

  Route::middleware(['auth.check'])->group(function () {
    Route::get('/',['uses' => 'HomeController@index', 'as' => 'api.index']);
    Route::get('/sidebar',['uses' => 'HomeController@sidebar', 'as' => 'api.sidebar']);
    Route::get('/logout',['uses' => 'AuthenticationController@doLogout', 'as' => 'api.logout']);
  });
  Route::post('/login',['uses' => 'AuthenticationController@doLogin', 'as' => 'api.login']);

});


Route::get('/{any?}', function () {
  return view('index');
});
