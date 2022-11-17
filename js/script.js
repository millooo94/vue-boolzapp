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
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
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
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
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
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
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
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
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
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
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
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
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
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
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
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
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
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                searchContacts: '',
                newMessageSentMessage: '',
                newMessageSentDate: '',
                newMessageReceivedMessage: 'Ok',
                newMessageReceivedDate: '',
                isActive: false       
                
    },
    
    methods: {
        selectContact(index){
            this.selectedContact = this.contacts[index]
        },

        addMessage() {
            if (this.newMessageSentMessage.trim()) {
                this.selectedContact.messages.push({date: this.currentSentDate(), message: this.newMessageSentMessage.trim(), status: 'sent'}),
                this.newMessageSentMessage = '';
               }
           },
        
        
        answerMessage() {
            setTimeout(() => this.selectedContact.messages.push({date: this.currentReceivedDate(), message: this.newMessageReceivedMessage, status: 'received'}), 2000);
            this.newMessageReceivedDate = '';
        },


        includesCharacters(contact) {
            console.log('test search:', this.searchContacts);
            return contact.name.includes(this.searchContacts)
        },

        currentReceivedDate() {
            const date = new Date
            this.newMessageReceivedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            this.newMessageReceivedDate = this.newMessageReceivedDate.slice(11, 16)
            return this.newMessageReceivedDate
        },
        
        currentSentDate() {
            const date = new Date
            this.newMessageSentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            this.newMessageSentDate = this.newMessageSentDate.slice(11, 16)
            return this.newMessageSentDate
        },
        changeMenuIndex(){
            this.isActive = !this.isActive
        },
        deleteMessage(index){
          this.selectedContact.messages.splice(index, 1)
        },
        okok(i){
            if(selectedContact.messages[i] == true) {
                isActive = true
            }
        }



    }
})






