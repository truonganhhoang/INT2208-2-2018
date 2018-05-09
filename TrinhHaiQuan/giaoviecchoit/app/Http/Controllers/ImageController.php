<?php

namespace App\Http\Controllers;

use App\Image;
use App\Relater;
use App\User;
use App\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    //
    public function create( Request $requestId, $url){
        return Image::create([
            'request_id' => $requestId->id,
            'url_image' => $url,
        ]);
    }
    private function getImageNamewithoutExtension($originalFileName, $extensionFileName)
    {
        return substr($originalFileName, 0, strlen($originalFileName) - (strlen($extensionFileName) + 1));
    }
    private function createUniqueImageName ($originalFileName, $extensionFileName){
        $fileName = '';
        $fileNamewithoutExtension = $this->getImageNamewithoutExtension($originalFileName, $extensionFileName);
        $fileName = $fileNamewithoutExtension. uniqid('_'). '.'. $extensionFileName;
        return $fileName;
    }
    public function storeImage(Request $requestId,$image){
        $originalFileName = $image->getClientOriginalName();
        $extensionFileName = $image->getClientOriginalExtension();
        $imageName = $this->createUniqueImageName($originalFileName,$extensionFileName);
        Storage::put($imageName, file_get_contents($image));
        $this->create($requestId,$imageName);
    }
}
