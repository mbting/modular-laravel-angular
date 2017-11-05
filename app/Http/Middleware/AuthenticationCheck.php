<?php

namespace App\Http\Middleware;

use App\Http\Responses\Response;
use Closure;
use Exception;
use JWTAuth;

class AuthenticationCheck {

  public function handle($request, Closure $next, $guard = null)
  {
    try {
      if ($user = JWTAuth::parseToken()->authenticate()) {
        return $next($request);
      }
    } catch (Exception $e) {
      return response(Response::failure(null, 1, 'Unauthorized'), 401);
    }

    return response(Response::failure(null, 1, 'Unauthorized'), 401);

  }
}
