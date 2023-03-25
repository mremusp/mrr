import Button from './components/Button';
import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id: 'hsggvd',
            label: 'Can I use React on a project',
            content: 'You can use React on any project'
        },
        {
            id: 'nghcy',
            label: 'Can I use JS on a project',
            content: 'You can use JS on any project'
        },
        {
            id: 'yi52hiu',
            label: 'Can I use HTML on a project',
            content: 'You can use HTML on any project'
        },
    ]

    return <Accordion items={items} />
}

export default App;