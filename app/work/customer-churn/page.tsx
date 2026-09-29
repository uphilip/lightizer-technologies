// Customer Churn Predictor case-study page.
// This page presents the project, approach, results, and technologies used.

export default function CustomerChurnPage() {
    return (
        <main className="min-h-screen">

            {/* Hero section */}
            <section className="mx-auto max-w-6xl px-6 pb-24 pt-40">

                {/* Project category */}
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                    Machine Learning · Data Analysis
                </p>

                {/* Project title */}
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                    Customer Churn Predictor
                </h1>

                {/* Short project introduction */}
                <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
                    A machine learning application that analyzes customer information
                    and estimates the likelihood of customer churn.
                </p>

                {/* Project link */}
                <div className="mt-10">
                    <a
                        href="https://github.com/uphilip/customer-churn-predictor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
                    >
                        View on GitHub →
                    </a>
                </div>
            </section>

            {/* Overview section */}
            <section className="border-y border-gray-200 dark:border-gray-800">
                <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">

                    {/* Project overview */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                            01 — Overview
                        </p>

                        <h2 className="mt-4 text-3xl font-bold">
                            Turning customer data into predictions
                        </h2>
                    </div>

                    {/* Overview description */}
                    <div className="text-base leading-8 text-gray-600 dark:text-gray-400">
                        <p>
                            The project uses customer data to build a classification model
                            capable of estimating whether a customer is likely to churn.
                            The workflow covers data preparation, analysis, model training,
                            evaluation, and deployment through an interactive application.
                        </p>
                    </div>

                </div>
            </section>

            {/* Results section */}
            <section className="mx-auto max-w-6xl px-6 py-24">

                {/* Section heading */}
                <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                    02 — Results
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                    Model performance
                </h2>

                {/* Performance metrics */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">

                    {/* ROC-AUC metric */}
                    <div className="rounded-xl border border-gray-200 p-8 dark:border-gray-800">
                        <p className="text-4xl font-bold">84.16%</p>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            ROC-AUC
                        </p>
                    </div>

                    {/* Recall metric */}
                    <div className="rounded-xl border border-gray-200 p-8 dark:border-gray-800">
                        <p className="text-4xl font-bold">78.34%</p>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Recall
                        </p>
                    </div>

                </div>
            </section>

            {/* Approach section */}
            <section className="border-y border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-6xl px-6 py-24">

                    {/* Section heading */}
                    <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                        03 — Approach
                    </p>

                    <h2 className="mt-4 text-3xl font-bold">
                        From data to application
                    </h2>

                    {/* Workflow */}
                    <div className="mt-12 grid gap-6 md:grid-cols-4">

                        {/* Step 1 */}
                        <div>
                            <span className="text-sm text-gray-400">01</span>
                            <h3 className="mt-3 font-semibold">Data</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Working with customer churn data containing demographic,
                                service, contract, and billing information.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <span className="text-sm text-gray-400">02</span>
                            <h3 className="mt-3 font-semibold">Preparation</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Preparing the dataset for machine learning and transforming
                                the available customer information into usable model inputs.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <span className="text-sm text-gray-400">03</span>
                            <h3 className="mt-3 font-semibold">Model</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Training and evaluating a Logistic Regression classification
                                model for churn prediction.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <span className="text-sm text-gray-400">04</span>
                            <h3 className="mt-3 font-semibold">Application</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Turning the trained model into an interactive Streamlit
                                application for customer risk prediction.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Technology section */}
            <section className="mx-auto max-w-6xl px-6 py-24">

                {/* Section heading */}
                <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                    04 — Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                    Built with
                </h2>

                {/* Technology list */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">
                        Python
                    </span>

                    <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">
                        Pandas
                    </span>

                    <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">
                        Scikit-learn
                    </span>

                    <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">
                        Streamlit
                    </span>

                    <span className="rounded-lg border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">
                        Jupyter Notebook
                    </span>
                </div>
            </section>

            {/* GitHub call-to-action */}
            <section className="border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-6xl px-6 py-24">

                    <h2 className="text-3xl font-bold">
                        Explore the project
                    </h2>

                    <p className="mt-4 max-w-xl text-gray-500 dark:text-gray-400">
                        View the source code, notebook, application, and project files
                        on GitHub.
                    </p>

                    <a
                        href="https://github.com/uphilip/customer-churn-predictor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                        Open GitHub Repository →
                    </a>

                </div>
            </section>

        </main>
    );
}