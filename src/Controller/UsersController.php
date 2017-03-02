<?php
namespace App\Controller;

use App\Controller\AppController;

class UsersController extends AppController {
    public function initialize() {
        parent::initialize();
        $this->loadComponent('RequestHandler');
        $this->autoRender = false;
    }

    public function index() {
        $users = [
            ['name' => 'Jason'],
            ['name' => 'Alex'],
            ['name' => 'Mark'],
        ];
        $this->response->type('application/json');
        echo json_encode($users);
    }
}
