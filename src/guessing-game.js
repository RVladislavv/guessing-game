class GuessingGame {
    //стандартный метод, создании класса вызывается автоматически и создаёт объект
    constructor() {
        //по идее сюда ничего не должно идти - функции ниже станут методами, а свойств не будет как я понял
    }
    

    //метод - примет мин и макс, запишем как свойства класса, после они меняются методами ниже
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    //тупо берёт середину от диапазона делённого на 2 - не забыть округлить(похоже к меньшему числу)
    guess() {
        return Math.round((this.min + this.max) / 2);
    }

    //если число меньше, чем guess, то нужно менять max на guess
    lower() {
        this.max = this.guess();
    }

    //если число больше, чем guess, то нужно менять min на guess
    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
