import {Component, Input, OnInit} from '@angular/core';
import {Restaurante} from '../../interfaces/restaurante';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {DataLocalService} from '../../services/data-local.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ModalInfoPage} from '../../pages/modal-info/modal-info.page';

@Component({
    selector: 'app-restaurante',
    templateUrl: './restaurante.component.html',
    styleUrls: ['./restaurante.component.scss'],
})
export class RestauranteComponent implements OnInit {

    @Input() restaurante: Restaurante;
    @Input() nro: number;
    @Input() enFavoritos;

    constructor(private actionSheetController: ActionSheetController,
                private socialSharing: SocialSharing,
                private iab: InAppBrowser,
                private dataLocalService: DataLocalService,
                private modalController: ModalController) {
    }

    ngOnInit() {
    }

    abrirRestaurante() {
        const browser = this.iab.create(this.restaurante.url, '_system');
    }

    async lanzarMenu() {

        let borrarBtn;
        if (this.enFavoritos) {
            borrarBtn = {
                text: 'Borrar Favorito',
                icon: 'trash',
                cssClass: 'action-dark',
                handler: () => {
                    console.log('Borrar Favorito');
                    this.dataLocalService.borrarRestaurante(this.restaurante);
                }
            };
        } else {
            borrarBtn = {
                text: 'Favorito',
                icon: 'star',
                cssClass: 'action-dark',
                handler: () => {
                    console.log('Favorito');
                    this.dataLocalService.guardarRestaurante(this.restaurante);
                }
            };
        }

        const actionSheet = await this.actionSheetController.create({
            buttons: [
                {
                    text: 'Reservar',
                    icon: 'book-outline',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Reservar clicked');
                        this.reservar(this.restaurante);
                    }
                },
                {
                    text: 'Compartir',
                    icon: 'share',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Share clicked');
                        this.socialSharing.share(
                            this.restaurante.nombre,
                            this.restaurante.direccion,
                            null, // file
                            this.restaurante.url
                        );
                    }
                },
                borrarBtn,
                {
                    text: 'Cancelar',
                    icon: 'close',
                    cssClass: 'action-dark',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        });
        await actionSheet.present();
    }

    async reservar(restaurante: Restaurante) {
        console.log(`this.restaurante`);

        const modal = await this.modalController.create({
            component: ModalInfoPage,
            componentProps: {
                id: restaurante.id,
                nombre: restaurante.nombre
            }
        });

        await modal.present();

        const {data} = await modal.onDidDismiss();
        console.log(data);
    }
}
