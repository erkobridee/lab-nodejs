interface Contact {
  name: string,
  email: string,
  twitter: string
}

var contacts: Contact[] = [];

var contact: Contact;

contact = {
  name: 'Erko Bridee',
  email: 'my@mail.ext',
  twitter: 'erkobridee'
};

contacts.push( contact );

contact = {
  name: 'Other Person',
  email: 'person@other.ext',
  twitter: 'otherperson'
};

contacts.push( contact );

//---

console.log( contacts );