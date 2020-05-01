<template>
    <div class="media right-news">
        <div class="box-video-right">
            <div class="head head-right">
                <h4><a href="#">Bản tin hình Vietcombank</a></h4>
            </div>
            <div class="content-media">
                <div class="tabs">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="video-1" role="tabpanel" aria-labelledby="video-1-tab">
                            <video width="100%" controls>
                                <source src="../videos/video-1.mp4" type="video/mp4">
                            </video>
                            <div class="social-video">
                                <button class="share-button">
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button>
                                <button class="down">
                                    <a href="#"><img src="../images/downloadvideo.png"></a>
                                </button>
                            </div>
                            <div class="logo-video">
                                <img src="../images/logo.png" alt="logo">
                            </div>
                            <div class="share">
                                <div class="inner-share">
                                    <h3>Share video</h3>
                                    <ul>
                                        <li>
                                            <span>Embed code</span> <input id="embed" type="text" value="<iframe src='../detail-video.html' />"><button class="select" onclick="selectText1()">Select</button>
                                        </li>
                                        <li>
                                            <span>Video link</span> <input id="link" type="text" value="../detail-video.html"><button class="select" onclick="selectText2()">Select</button>
                                        </li>
                                        <li>
                                            <a href="http://www.facebook.com/sharer.php?u=#" target="_blank">
                                                <img src="../images/facebook.png">
                                            </a>
                                            <a href="https://twitter.com/share?url=#&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
                                                <img src="../images/twitter.png">
                                            </a>
                                            <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 #">
                                                <img src="../images/email.png">
                                            </a>
                                        </li>    
                                    </ul>
                                </div>
                                <div class="close">
                                    <i class="fa fa-window-close" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="video-2" role="tabpanel" aria-labelledby="video-2-tab">
                            <video width="100%" controls>
                                <source src="../videos/video-1.mp4" type="video/mp4">
                            </video>
                            <div class="social-video">
                                
                            </div>
                            <div class="logo-video">
                                <img src="../images/logo.png" alt="logo">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="video-3" role="tabpanel" aria-labelledby="video-3-tab">
                            <video width="100%" controls>
                                <source src="../videos/video-1.mp4" type="video/mp4">
                            </video>
                            <div class="social-video">
                                
                            </div>
                            <div class="logo-video">
                                <img src="../images/logo.png" alt="logo">
                            </div>
                        </div>
                    </div> 
                    <div class="nav nav-tabs" id="nhip-caux-tab" role="tablist">
                        <a class="nav-item nav-link active" id="video-1-tab" data-toggle="tab" href="#video-1" role="tab" aria-controls="video-1" aria-selected="true">
                            Bản tin hình số 58 <span>(13/04/2020)</span>
                        </a>
                        <a class="nav-item nav-link" id="video-2-tab" data-toggle="tab" href="#video-2" role="tab" aria-controls="video-2" aria-selected="false">
                            Bản tin hình số 58 <span>(13/04/2020)</span>
                        </a>
                        <a class="nav-item nav-link" id="video-3-tab" data-toggle="tab" href="#video-3" role="tab" aria-controls="video-3" aria-selected="false">
                            Bản tin hình số 58 <span>(13/04/2020)</span>
                        </a>
                    </div> 
                </div>   
            </div>
        </div>
    </div>
</template>