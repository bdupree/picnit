<?php
	//Include
API Class
	require_once("API.php");

	class Image extends API {

		public function __construct() {
			//Parent Constructor
			parent::__construct();

			//Connect to the database
			$this->link = $this->db_connect();
		}

		public function getImage() {
			$imageid = $_POST['imageid'];

			if(empty($imageid))
				$this->response('', 400);

			// Redirect to our get_image handler
			header("Location: php/get_image.php?id=$imageid");
			exit;
		}

		public function saveImage() {
			$userid = mysql_real_escape_string($_POST['userid']);
			$albumid = mysql_real_escape_string($_POST['albumid']);
			$publicness = mysql_real_escape_string($_POST['publicness']);
			$phototype = mysql_real_escape_string($_POST['phototype']);
			$photo = base64_decode($_POST['image']);

			// Check that we have everything we need
			if(empty($userid) || empty($albumid) || empty($publicness) || empty($photo) || empty($phototype) || strlen($phototype) != 3)
				$this->response('', 400);

get_new_file_path:
			// Path is stored in the form "/xxxx/xxxx/xxxx/xxxx/xxxx/xx.ext"
			// Storing very large numbers of files in a single directory is extremely sub-optimal
			// on the ext3/ext4 filesystems. Adding a random directory tree like this dramatically
			// enhances performance with large numbers of pictures.
			// FIXME: We need some way to determine the file extention to add...
			$dir1 = mt_rand(0,9999);
			$dir2 = mt_rand(0,9999);
			$dir3 = mt_rand(0,9999);
			$dir4 = mt_rand(0,9999);
			$dir5 = mt_rand(0,9999);
			$file = mt_rand(0,99);
			$filepath = "/".$dir1."/".$dir2."/".$dir3."/"."/".$dir4."/".$dir5."/".$file.".$phototype";

			// This should pretty much never happen, but still...
			if(file_exists("/var/www".$filepath))
				goto get_new_file_path;

			// Actually write out the POSTed photo file data
			$fh = fopen("/var/www".$filepath);
			fwrite($fh, $photo);
			fclose($fh);

			$result = mysql_query("INSERT INTO images (album_id,publicness,filepath,date_added) VALUES ('$albumid','$publicness', '$filepath', NOW())");
			if(!$result)
				$this->response('', 404);

			$this->response('',200);
		}

		public function addTag() {
			//Get the vars
                        $image_id = mysql_real_escape_string($_POST['image_id']);
                        $tag = mysql_real_escape_string($_POST['tag']);

                        //Ensure all variables needed are present
                        if(isset($tag) && isset($image_id)) {
                                //create tag
                                $res = mysql_query("INSERT INTO category_tags VALUES ('$image_id', '$tag')"), $this->link);

                                //Make sure query works
                                if(!$res) {
                                        //Get error
                                        $err = mysql_errno();

                                        if($err == 1062) {
                                                //image already has that tag
                                                $error = json_encode(array('status' => 'Failed', 'msg' => 'Image already has that tag'));
                                                $this->response($error, 409);
                                        }

                                        //Something else went wrong
                                        $error = json_encode(array('status' => 'Failed', 'msg' => 'Unknown error'));
                                        $this->response($error, 500);
                                }

                                //success
                                $this->response(json_encode('', 200));
                        }

                        $error = json_encode(array('status' => 'Failed', 'msg' => 'Missing image_id or tag'));
                        $this->response($error, 400);
		}

		public function deleteTag() {
			//Get the vars
                        $image_id = mysql_real_escape_string($_POST['image_id']);
                        $tag = mysql_real_escape_string($_POST['tag']);

                        //Ensure all variables needed are present
                        if(isset($tag) && isset($image_id)) {
				//make sure tag exists
				$res = mysql_query("SELECT * FROM category_tags where image_id='$image_id' and category_tag='$tag'"), $this->link);
				if($res){
					//image does not have that tag
                                        $error = json_encode(array('status' => 'Failed', 'msg' => 'Image does not have that tag'));
                                        $this->response($error, 409);
				}

                                //delete tag
                                mysql_query("REMOVE FROM category_tags where image_id='$image_id' and category_tag='$tag'"), $this->link);
                                //success
                                $this->response(json_encode('', 200));
                        }

                        $error = json_encode(array('status' => 'Failed', 'msg' => 'Missing image_id or tag'));
                        $this->response($error, 400);
		}
	}

	$api = new Image;
	$api->process();
}
