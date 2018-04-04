import { Component, OnInit } from "@angular/core";

@Component({
  selector: "upload-documents",
  templateUrl: "./upload-documents.component.html",
  styleUrls: ["./upload-documents.component.css"]
})
export class UploadDocumentsComponent implements OnInit {
  docs = {
    Aadhar: {
      fileName: "",
      data: ""
    },
    PAN: {
      fileName: "",
      data: ""
    },
    salaryRevisionLetter: {
      fileName: "",
      data: ""
    },
    performanceLetter: {
      fileName: "",
      data: ""
    },
    relievingLetter: {
      fileName: "",
      data: ""
    },
    contractLetterOne: {
      fileName: "",
      data: ""
    },
    contractLetterTwo: {
      fileName: "",
      data: ""
    },
    paySlipOne: {
      fileName: "",
      data: ""
    },
    paySlipTwo: {
      fileName: "",
      data: ""
    },
    paySlipThree: {
      fileName: "",
      data: ""
    },
    pg: {
      fileName: "",
      data: ""
    },
    ug: {
      fileName: "",
      data: ""
    },
    twelfth: {
      fileName: "",
      data: ""
    },
    tenth: {
      fileName: "",
      data: ""
    },
    workPermit: {
      fileName: "",
      data: ""
    },
    miscellaneous: {
      fileName: "",
      data: ""
    }
  };
  constructor() {}

  ngOnInit() {
    //linking the upload buttons to the input files
    for (let index in this.docs) {
      document
        .getElementById(`custom-file-input-${index}`)
        .addEventListener("click", () => {
          document.getElementById(`file-input-${index}`).click();
          //console.log(fileInput);
        });

      document
        .getElementById(`file-input-${index}`)
        .addEventListener("change", event => {
          let file = (event.target as HTMLInputElement).value;
          if (file) {
            this.docs[
              index
            ].fileName = (event.target as HTMLInputElement).value.replace(
              /^.*[\\\/]/,
              ""
            );
            document.getElementById(
              `custom-file-input-${index}`
            ).innerText = this.docs[index];
          }
        });
    }
  }

  encodeFile() {
    let doc;
    let file;
    for (let index in this.docs) {
      doc = document.getElementById(`file-input-${index}`) as HTMLInputElement;
      file = doc.files[0];

      let dataPromise = new Promise((resolve, reject) => {
        let reader = new FileReader() as any;
        reader.onload = function(event) {
          resolve(reader.result.split(",")[1]);
        };
        reader.onerror = function(error) {
          console.log("Error: ", error);
          reject(error);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }).then(base64 => {
        this.docs[index].data = base64;
      });
    }
  }

  onSubmit() {}
}
