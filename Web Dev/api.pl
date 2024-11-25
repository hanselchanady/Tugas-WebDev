use App\Http\Controllers\UserController;

Route::get('/users', [User Controller::class, 'index']);
Route::post('/users', [User Controller::class, 'store']);
Route::get('/users/{id}', [User Controller::class, 'show']);
Route::put('/users/{id}', [User Controller::class, 'update']);
Route::delete('/users/{id}', [User Controller::class, 'destroy']);