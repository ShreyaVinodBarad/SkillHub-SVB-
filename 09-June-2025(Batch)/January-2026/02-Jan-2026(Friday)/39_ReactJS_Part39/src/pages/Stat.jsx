import React from 'react'
import Card01 from "./../components/Card01"
import Card02 from "./../components/Card02"
import Card03 from "./../components/Card03"
import { ErrorBoundary } from 'react-error-boundary'

const Stat = () => {
    const ErrorHandler = () => {
        return <h1 class="alert alert-danger mt-3">
            Error...
        </h1>
    }
    return (
        <div>
            {/* 📌 If we wrap whole code of Stat component inside ErrorBoundary than the whole Stat Page will have Error but not on the part of the page the error exists. So, we have wrap part of code where we can have error inside ErrrBoundary. So, where error comes that part will show alert as "Error". */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ErrorBoundary FallbackComponent={ErrorHandler}>
                            <Card01 />
                        </ErrorBoundary>
                    </div>
                    <div className="col-sm-4">
                        <ErrorBoundary FallbackComponent={ErrorHandler}>
                            <Card02 />
                        </ErrorBoundary>
                    </div>
                    <div className="col-sm-4">
                        <ErrorBoundary FallbackComponent={ErrorHandler}>
                            <Card03 />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat