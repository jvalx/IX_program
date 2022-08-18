import React from 'react'


export default function Spinner({
    className,
    variant
}) {
    return (
        <div>
            <div className={"spinner-border text-" + variant + ' ' + className} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}
