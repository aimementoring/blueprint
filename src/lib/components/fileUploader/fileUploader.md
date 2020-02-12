## drag and drop area to upload file

```js
<FileUploader
  name="wwccFiles"
  folderInS3Name="test/blueprint"
  maxNumberOfFiles={2}
  allowMultipleUploads={true}
  filesUploaded=""
  height={500}
  companionUrl="https://uppy-file-uploader.herokuapp.com/"
  theme="rainbow"
  uppyInstanceId="blueprint-uppy-drag-drop"
  isDashboard
  onFilesUpload={(name, value) => console.log({ name, value })}
/>
```

## Button to upload file

```js
<FileUploader
  name="wwccFiles"
  folderInS3Name="test/blueprint"
  maxNumberOfFiles={2}
  allowMultipleUploads={true}
  filesUploaded=""
  height={500}
  companionUrl="https://uppy-file-uploader.herokuapp.com/"
  theme="rainbow"
  uppyInstanceId="blueprint-uppy"
  onFilesUpload={(name, value) => console.log({ name, value })}
/>
```

requiredProps:

- uppyInstanceId
- folderInS3Name
- onFilesUpload

`onFilesUpload` is handled in the parent component it is used to direct the file to the selected DB.
