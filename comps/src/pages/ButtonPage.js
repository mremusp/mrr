import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClickFirst = () => {
        console.log('clicked on first')
    }

    return (
        <div>
            <div>
                <Button onClick={handleClickFirst} outline warning>
                    <GoBell />
                    first
                </Button>
            </div>
            <div>
                <Button secondary rounded className="mb-5">
                    <GoCloudDownload />
                    second
                </Button>
            </div>
            <div>
                <Button primary>
                    <GoDatabase />
                    third
                </Button>
            </div>
            <div>
                <Button danger rounded outline>
                    <GoCloudDownload />
                    fourth
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoDatabase />
                    fifth
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;