import { Component, OnInit } from '@angular/core';
import { HamburguesaCardComponent } from "../hamburguesa-card/hamburguesa-card.component";
import { Hamburguesa } from '../../../../public/dto/hamburguesa';
import { HamburguesaService } from '../../services/hamburguesa.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BurguerModalComponent } from '../burguerModal/burguerModal.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  standalone: true,
  imports: [HamburguesaCardComponent, CommonModule, MatDialogModule],
})
export class ProductosComponent implements OnInit {

  constructor(
    private hamburguesaService: HamburguesaService,
    public dialog: MatDialog
  ) { }

  hamburguesas: Hamburguesa[] = [];
  cargando: boolean = true;

  ngOnInit() {
    this.cargarHamburguesas();
  }

  cargarHamburguesas() {
    this.hamburguesaService.getHamburguesas().subscribe({
      next: (hamburguesas: Hamburguesa[]) => {
        this.hamburguesas = hamburguesas;
      },
      error: (error) => {
        console.error('Error al cargar las hamburguesas:', error);
      },
      complete: () => {
        this.cargando = false;
      }
    });
  }

  abrirModal() {
    const dialogRef = this.dialog.open(BurguerModalComponent, {
      maxWidth: '100%',
      panelClass: 'custom-modal-container',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarHamburguesas();
    });
  }

}
