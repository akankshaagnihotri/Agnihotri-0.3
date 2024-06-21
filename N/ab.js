document.getElementById('downloadButton').addEventListener('click', function() {
    // Generate dynamic content
    const content = 'This is the content of the file.\nGenerated dynamically on ' + new Date().toLocaleString();

    // Create a Blob from the content
    const blob = new Blob([content], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Set the download attribute with a filename
    link.href = url;
    link.download = 'dynamicFile.txt';

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after download
    document.body.removeChild(link);

    // Revoke the URL to free up resources
    URL.revokeObjectURL(url);
});
