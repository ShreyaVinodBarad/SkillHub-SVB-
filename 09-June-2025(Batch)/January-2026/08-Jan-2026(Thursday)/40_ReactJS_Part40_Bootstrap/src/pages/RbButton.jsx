import React from 'react'
import { Button } from 'react-bootstrap'

const RbButton = () => {
    return (
        <div>
            {
                [
                    "primary",
                    "secondary",
                    "info",
                    "success",
                    "danger",
                    "warning",
                    "dark",
                    "light"
                ].map(item => <Button key={item} variant={item}
                >
                    {item.toUpperCase() + " BUTTON"}
                </Button>)
            }

            {
                [
                    "outline-primary",
                    "outline-secondary",
                    "outline-info",
                    "outline-success",
                    "outline-danger",
                    "outline-warning",
                    "outline-dark",
                    "outline-light"
                ].map(item => <Button key={item} variant={item}
                >
                    {item.toUpperCase() + " BUTTON"}
                </Button>)
            }

            <Button size='lg'>Large Button</Button>
            <Button>Medium Button</Button>
            <Button size='sm'>Small Button</Button>

            <Button variant='outline-dark' size='lg'>
                Outline Large Black Button
            </Button>
        </div >
    )
}

export default RbButton