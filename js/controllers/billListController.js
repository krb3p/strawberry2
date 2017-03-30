//Where will you render? What will you render
class BillListController {
  constructor ($target, bills, detailController) {
    this.$target = $target
    this.bills = bills
    this.detailController = detailController
    this.attachListeners()
    this.render()
  }

  render() {
    BillListView.renderBillListItems(this.$target, this.bills)
  }

  attachListeners(){
    this.$target.on('click', 'li.billQuery', (e) => {
      e.preventDefault()
      let bill = e.target.firstChild
      debugger
      this.detailController.setCurrent()
    })
  }
}