const app = new Vue({
    el: '.container',
    data: {
        contacts: [
            {
            name: 'Michele',
            avatar: 'avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received',
            isActive:  false
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: 'avatar_2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent',
            isActive:  false
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            isActive:  false
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            isActive:  false
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received',
            isActive:  false
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            isActive:  false
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received',
            isActive:  false
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: 'avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received',
            isActive:  false
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: 'avatar_5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received',
            isActive:  false
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: 'avatar_6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received',
            isActive:  false
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent',
            isActive:  false
            }
            ],
            },
            {
            name: 'Federico',
            avatar: 'avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received',
            isActive:  false
            }
            ],
            },
            {
            name: 'Davide',
            avatar: 'avatar_8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received',
            isActive:  false
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent',
            isActive:  false
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received',
            isActive:  false
            }
            ],
            }
            ],
            selectedContact: {
                name: 'Michele',
                avatar: 'avatar_1.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                isActive:  false
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                isActive:  false
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                isActive:  false
                }
                ],
                },
                searchContacts: '',
                newMessage: '',
                lastAccess: 'Ultimo accesso'

                      
                
    },
    
    methods: {
        selectContact(index){
            this.selectedContact = this.contacts[index]
        },

        includesCharacters(contact) {
            return contact.name.toLowerCase().includes(this.searchContacts.toLowerCase())
        },

        changeMenuIndex(index){
            this.selectedContact.messages[index].isActive = !this.selectedContact.messages[index].isActive
        },

        deleteMessage(index){
           this.selectedContact.messages.splice(index, 1)
        },

        sendMessage() {
            if(this.newMessage != ''){
                this.selectedContact.messages.push({
                    date: this.getNow(),
                    message: this.newMessage,
                    status: 'sent',
                    isActive: false
                });
                this.newMessage = '';
                this.lastAccess = 'Sta scrivendo...'
                let receiver = this.selectedContact
                setTimeout(() => {
                    receiver.messages.push({
                        date: this.getNow(),
                        message: 'Ok',
                        status: 'received',
                        isActive: false
                    })
                    this.lastAccess = `Ultimo accesso oggi alle ${this.selectedContact.messages[this.selectedContact.messages.length - 1].date.slice(11,16)} `
                    ;
                }, 5000);   
            }
		},
		getNow() {
			return luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
		}
    },


    
})






