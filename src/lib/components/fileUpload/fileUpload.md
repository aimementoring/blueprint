```jsx inside Markdown
import React from 'react';

function uploadFile(file, data) {
  console.log(file);
  console.log(data);
}

<FileUpload
  folderInS3Name={`hoodedScholarRecruitment/${12321}`}
  maxNumberOfFiles={2}
  allowMultipleUploads={true}
  filesUploaded={[]}
  onFilesUpload={uploadFile}
/>;
```

```jsx inside Markdown
import React from 'react';

function uploadFile(file, data) {
  console.log(file);
  console.log(data);
}

<FileUpload
  folderInS3Name={`hoodedScholarRecruitment/${12321}`}
  maxNumberOfFiles={2}
  allowMultipleUploads={true}
  filesUploaded={[]}
  onFilesUpload={uploadFile}
  isDashboard={true}
/>;
```
