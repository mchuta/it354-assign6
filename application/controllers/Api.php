<?php
use Restserver\Libraries\REST_Controller;
require(APPPATH.'/libraries/REST_Controller.php');

 
class Api extends REST_Controller
{
    function projects_get($project_id = null)
    {

        if($project_id)
        {
            $project = $this->project_model->get_project( $project_id );
        }
        else if($this->get('id'))
        {
            $project = $this->project_model->get_project( $this->get('id') );
        }
        else  if($this->get('search'))
        {
            $project = $this->project_model->get_project_by_keyword($this->get('search'));
        }
        else
        {
            $project = $this->project_model->get_projects();
        }

        if($project)
        {
            $this->response($project, REST_Controller::HTTP_OK); // 200 being the HTTP response code
        }
 
        else
        {
            $this->response(NULL, REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function projects_post()
    {
        $data = [
            'project_user_id' => $this->post('project_user_id'),
            'project_name' => $this->post('project_name'),
            'project_body' => $this->post('project_body'),
            'date_created' => $this->post('date_created')
        ];

        $project = $this->project_model->create_project($data);

        if($project)
        {
            $this->response($project, REST_Controller::HTTP_CREATED); // 201 being the HTTP response code for created
        }

        else
        {
            $this->response(NULL, REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function projects_put($project_id)
    {
        $data = [
            'project_user_id' => $this->put('project_user_id'),
            'project_name' => $this->put('project_name'),
            'project_body' => $this->put('project_body'),
            'project_status' => $this->put('project_status')
        ];

        $project = $this->project_model->edit_project($project_id, $data);

        if($project)
        {
            $this->response($project, REST_Controller::HTTP_OK); // 200 being the HTTP response code
        }

        else
        {
            $this->response(NULL, REST_Controller::HTTP_NOT_FOUND);
        }
		
		
    }


    public function projects_delete($project_id)
    {

        if ($this->project_model->get_project($project_id)) 
        {
            $this->project_model->delete_project_tasks($project_id);

            $this->project_model->delete_project($project_id);
            
            $this->response(NULL, REST_Controller::HTTP_OK); // 200 being the HTTP response code
		
        } else {
            $this->response(NULL, REST_Controller::HTTP_NOT_FOUND);
        }
		
    }
}
?>