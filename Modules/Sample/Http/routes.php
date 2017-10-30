<?php

Route::group(['middleware' => 'web', 'prefix' => 'api/sample', 'namespace' => 'Modules\Sample\Http\Controllers'], function() {
    Route::get('/', 'SampleController@index');
});
