import { CommonModule } from '@angular/common';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HamburguesaService } from '../../services/hamburguesa.service';

@Component({
  selector: 'app-burguerModal',
  templateUrl: './burguerModal.component.html',
  styleUrls: ['./burguerModal.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})
export class BurguerModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BurguerModalComponent>,
    private hamburguesaService: HamburguesaService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any,
  ) {}

  burguerForm!: FormGroup;

  ngOnInit() {
     this.burguerForm = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        precio: ['', [Validators.required]],
        imagen: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
      },
    );
  }

  agregarHamburguesa() {
    if (this.burguerForm.valid) {
      const nuevaHamburguesa = this.burguerForm.value;
      this.hamburguesaService.agregarHamburguesa(nuevaHamburguesa).subscribe({
        next: (response) => {
          console.log('Hamburguesa agregada:', response);
        },
        error: (error) => {
          console.error('Error al agregar la hamburguesa:', error);
        },
      });
      this.dialogRef.close();
    } else {
      console.error('Formulario inválido');
    }
  }


}
