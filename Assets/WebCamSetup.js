#pragma strict

private var webcam : WebCamTexture;

function Start () {
	webcam = WebCamTexture();
	GetComponent.<Renderer>().material.mainTexture = webcam;
	webcam.Play();
}
