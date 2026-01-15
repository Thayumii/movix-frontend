import { BarLoader, BeatLoader, SyncLoader } from 'react-spinners'
import { LoadingContainer } from './styles.js'

const Loading = ({ variant }) => {
    switch (variant) {
        case 'bar':
            return (
                <LoadingContainer>
                    <BarLoader color={'#bf1d1a'} />
                </LoadingContainer>
            )
        case 'beat':
            return (
                <LoadingContainer>
                    <BeatLoader color={'#bf1d1a'} />
                </LoadingContainer>
            )
        case 'sync':
            return (
                <LoadingContainer>
                    <SyncLoader color={'#bf1d1a'} />
                </LoadingContainer>
            )
    }
}

export default Loading