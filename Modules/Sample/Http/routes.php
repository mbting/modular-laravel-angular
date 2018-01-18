<?php

Route::group(['prefix' => 'api/sample', 'namespace' => 'Modules\Sample\Http\Controllers'], function () {

  Route::middleware(['auth.check'])->group(function () {
    Route::get('/',['uses' => 'SampleController@index', 'as' => 'api.sample.index']);
    Route::get('/action',['uses' => 'SampleController@action', 'as' => 'api.sample.action']);
    Route::get('/another',['uses' => 'SampleController@another', 'as' => 'api.sample.another']);
  });

});
