document.getElementById('saveButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputField').value;
    const fileName = 'input.txt';
    const fileContent = new Blob([inputText], { type: 'text/plain' });
    
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(fileName);

    fileRef.put(fileContent).then(() => {
        alert('File saved successfully');
        displayFiles();
    }).catch((error) => {
        console.error('Error saving file:', error);
        alert('Error saving file');
    });
});

// Display saved files
function displayFiles() {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child('input.txt');

    fileRef.getDownloadURL().then((url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const fileList = document.getElementById('fileList');
                fileList.innerHTML = `<li>input.txt: ${data}</li>`;
            });
    }).catch((error) => {
        console.error('Error getting file:', error);
    });
}

// Display files on page load
displayFiles();
