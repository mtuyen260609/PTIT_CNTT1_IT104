(()=>{
    type Product = {
        readonly id: string
        name: string
        price: number
    }

    type OrderItem = {
        product: Product
        quantity: number
    }

    type Order = {
        orderId: string
        customerName: string
        items: OrderItem[]
        note?: string
    }

    function calculateOrderTotal(order: Order): number {
        return order.items.reduce((total, item) => {
            return total + item.product.price * item.quantity
        }, 0)
    }

    function printOrder(order: Order): void {
        console.log(`Don hang ${order.orderId}`)
        console.log(`Khach hang ${order.customerName}`)
        console.log(`San pham`)
        order.items.forEach(item => {
            console.log(`${item.product.name} x ${item.quantity} -> ${item.product.price} VND`)
        })
        console.log(`Tong cong ${calculateOrderTotal(order)} VND`)
        if(order.note){
            console.log(`Ghi chu ${order.note}`)
        }
    }

    const order: Order = {
        orderId: "ORD123",
        customerName: "Nguyen Van A",
        note: "Giao hang trong gio hanh chinh",
        items: [
            {
                product: { id: "P01", name: "Ao so mi", price: 300000 },
                quantity: 2
            },
            {
                product: { id: "P02", name: "Quan tay", price: 500000 },
                quantity: 1
            }
        ]
    }
    printOrder(order)
})()