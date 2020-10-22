/*
	[POST] 
	 :first_name : string
	 :last_name : string
	 :email : string
	 :password : string
	 :is_coach : boolean
*/
export const registration_url = 'http://185.238.0.93:8000/register/'; 
/*
	[POST]
	:username : string
	:password : string
*/
export const get_token_url = 'http://185.238.0.93:8000/api/token/';
/*
	[POST]
	:refresh_token : string
*/
export const refresh_token_url = 'http://185.238.0.93:8000/api/token/refresh';
/*
	[POST]
	:email : string
	:pin : string
*/
export const confirm_email_url = 'http://185.238.0.93:8000/confirmEmail/';
/*
	[POST]
	:token : string
*/
export const continue_with_google_url = 'c';
/*
	[POST]
	:token : string
*/
export const continue_with_facebook_url = 'http://185.238.0.93:8000/fb/';
/*
	[POST]
	:email : string
*/
export const password_recovery_url = 'http://185.238.0.93:8000/recovery/';
/*
	[POST]
	:email : string
	:password : string
*/
export const change_password_url = 'http://185.238.0.93:8000/passwordChange/'

/*
	[POST]
	:pin : string
	:email : string
*/
export const check_pin_url = 'http://185.238.0.93:8000/checkPin/'

//-----------------------------------------------------------------------------------------------------


/*
	[POST]
	:current_weight : string
	:purpose_weight : string

	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!
*/
export const update_weight_url = 'http://185.238.0.93:8000/profile/weight-update/';
/*
	[GET]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!
*/
export const get_personal_data_url = 'http://185.238.0.93:8000/profile/personal/';
/*
	[POST]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!

	:email : text
	:img : text
*/
export const upload_profile_image_url = 'http://185.238.0.93:8000/profile/uploadImg';
/*
	[POST]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!

	:coach_id : text
	:note : integer
*/
export const add_coach_note_url = 'http://185.238.0.93:8000/profile/addNote/';
/*
	[POST]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!

	NOT IMPLEMENTED
*/
export const create_training_url = 'http://185.238.0.93:8000/profile/create-training/';
/*
	[POST]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!

	:training_title : string
*/
export const athlete_add_diary_url = 'http://185.238.0.93:8000/profile/athlete-diary-add/';
/*
	[POST]
	!!! ONLY IF AUTHENTICATED | TOKEN IN HEADER !!!

	:coach_id : string
*/
export const subscribe_to_coach_url = 'http://185.238.0.93:8000/profile/subscribe/';
