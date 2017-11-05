<?php

namespace App\Http\Responses;

class Response {

  public static function success($payload = null, $code = 0, $message = 'Success') {
    $response = ['code' => $code, 'message' => $message, 'payload' => $payload];
    return $response;
  }

  public static function failure($payload = null, $code = 8, $message = 'Failure') {
    $response = ['code' => $code, 'message' => $message, 'payload' => $payload];
    return $response;
  }

}
