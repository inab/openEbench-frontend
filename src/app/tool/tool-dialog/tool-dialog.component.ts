import { Component, OnInit, Inject } from '@angular/core'
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material/dialog'

export interface DialogData {
    animal: string
    name: string
}

@Component({
    selector: 'app-tool-dialog',
    templateUrl: './tool-dialog.component.html',
    styleUrls: ['./tool-dialog.component.css']
})
export class ToolDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<ToolDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close()
    }

    ngOnInit() {}
}
