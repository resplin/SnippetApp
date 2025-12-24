import Header from '../components/Header';
import SnippetList from '../components/Snippet/List'

export default function DashboardLayout({ snippets, children }) {
    return (
        <>
            <Header />
            <main>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 col-xl-4 leftPane'}>
                            <SnippetList snippets={snippets} />
                        </div>
                        <div className={'col-12 col-md-7 col-xl-8 rightPane'}>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
