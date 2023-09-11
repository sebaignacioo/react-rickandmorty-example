
import './Login.css'

const Login = () =>{

    return(
        <div>
            <h1>HOlaa</h1>
            <div className='wrapper-l' id="_wrapper">

	<div className='video-face'>
		<video  id="_webcam" ></video>
		<canvas id="_imageData"></canvas>
		<canvas id="_faceSub"></canvas>
		<canvas id="_t3d"></canvas>
		<canvas id="_f3d"></canvas>
		<canvas id="_drawing"></canvas>
		<div id="_progressBar"></div>
	</div>


</div>

<div id="_settingsRight"></div>
        </div>
    )
};



export default Login;