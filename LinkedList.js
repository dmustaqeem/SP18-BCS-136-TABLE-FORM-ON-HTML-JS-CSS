class LinkedList {
  constructor() {
    var n = 0;
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head == null && this.tail == null) {
      return true;
    } else {
      return false;
    }
  }

  addNewNode(name, gender, age, city) {
    var n = new Node();
    n.Name = name;
    n.Gender = gender;
    n.Age = age;
    n.City = city;
    if (this.isEmpty()) {
      this.head = n;
      this.tail = n;
      this.head.next = null;
      this.tail = this.head;
      n++;
    } else {
      this.tail.next = n;
      this.tail = n;
      this.tail.next = null;
      n++;
    }
  }

  deleteNode(name) {
    var temp = this.head;

    while (temp != null) {
      if (!this.isEmpty()) {
        //if the data is at start
        if (temp == this.head && temp.Name === name) {
          if (temp.next != null) {
            this.head = null;
            temp = temp.next;
            this.head = temp;
            break;
          } else {
            this.head = null;
            this.tail = null;
            break;
          }
        }

        //if data is at last
        if (temp.next.Name === name && temp.next == this.tail) {
          temp.next = null;
          this.tail = temp;
          break;
        }
        // //if data is at center
        else if (temp.next.Name === name && temp.next != this.tail) {
          var chk = temp.next;
          temp.next = null;
          temp.next = chk.next;
          break;
        }
      }
      temp = temp.next;
    }
  }

  searchUpdateNode(nameP, name, age, city, gender) {
    var temp = this.head;
    while (temp != null) {
      if (temp.Name === nameP) {
        temp.Name = name;
        temp.Age = age;
        temp.City = city;
        temp.Gender = gender;
      }
      temp = temp.next;
    }
  }

  numberOfNodes() {
    var temp = this.head;
    var i = 0;
    while (temp != null) {
      i++;
      temp = temp.next;
    }
    return i;
  }
}
