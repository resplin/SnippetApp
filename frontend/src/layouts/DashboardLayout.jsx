export default function DashboardLayout({ children }) {
    return (
        <>
            <main>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'leftPane'}>
                            <hr />
                        </div>
                        <div className={'rightPane'}>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}