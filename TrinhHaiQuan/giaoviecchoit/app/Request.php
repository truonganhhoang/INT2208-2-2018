<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    protected $table = 'requests';
    public $timestamps = true;
    protected $fillable = ['title', 'create_by', 'content', 'priority', 'deadline', 'assign_to', 'rating', 'team_id', 'resolve_at', 'status'];
    /* Trả về người được giao công việc
    * @return User
    */
    public function assign_to(){
        return $this->belongsTo(User::class,'assigned_to');
    }

    /*
     * Trả về người tạo ra công việc
     * @return User
     */
    public function create_by(){
        return $this->belongsTo(User::class,'create_by');
    }

    /*
     * Trả về team cần hoàn thành công việc
     * @return Team
     */
    public function team(){
        return $this->belongsTo(Team::class,'team_id');
    }

    /*
     * Trả về tên công việc
     * @return string
     */
    public function title(){
        return nl2br($this->title);
    }

    /*
     * Trả về nội dung công việc
     * @return string
     */
    public function content(){
        return nl2br($this->content);
    }

    /*
     * Trả về mức độ của công việc
     * 1: Thấp, 2: Bình thường, 3: Cao, 4: Khẩn cấp
     * @return int
     */
    public function priority(){
        return $this->priority;
    }

    /*
     * Trả về trạng thái của dự án
     * 1: New, 2: In progress, 3: Resolved, 4: Feedback, 5: Closed, 6: Cancelled
     * @return int
     */
    public function status(){
        return $this->status;
    }
    //nguoi lien quan
//    public function relater(){
//        return $this->belongsToMany('App\User','relaters','request_id','user_id')->withPivot('id');
//    }
//    //comment
//    // phan 2 with can xem xet lai
//    public function comment(){
//        return $this->belongsToMany('App\User','threads','request_id','user_id')->withPivot('id','content','type','note')->withTimestamps();
//    }
}


