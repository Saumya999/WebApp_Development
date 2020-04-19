import React from 'react'
import { Button, Card, Image, Container } from 'semantic-ui-react'
import micky from '../../Images/ProductIcons/Mickey_Mouse.png'
import auction from '../../Images/ProductIcons/auction.jpg'
import cineplayer from '../../Images/ProductIcons/CinePlayer.png'
import voice from '../../Images/ProductIcons/voice.jpg'
import Login from '../Login/Login'


class ProductHome extends React.Component {

async onClickGooseBumps() {
  return <Login/>
}
 

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={2}>
          <Card color='blue'>
            <Card.Content>
              <Card.Header>Hall of Cartoon</Card.Header>
              <Image
                floated='right'
                size='small'
                src={micky}
              />

              <Card.Meta>Choose Our Best</Card.Meta>
              <Card.Description>
                You can create your own to <strong>Sell</strong> or can <strong>Buy</strong> other's art also.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button.Group>
                  <Button positive>Post Your Art</Button>
                  <Button.Or />
                  <Button basic color='red'>Appreciate Other's</Button>
                </Button.Group>
              </div>
            </Card.Content>
          </Card>
          <Card color='blue'>
            <Card.Content>
              <Card.Header>Cine-Cartoon</Card.Header>
              <Image
                floated='right'
                size='small'
                src={cineplayer}
              />
              <Card.Meta>Choose our story line</Card.Meta>
              <Card.Description>
                You can take our Story line and cartoons to make your own movie.
                You can give us your story to make cartoon characters for you.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button.Group>
                  <Button positive>Movie Maker</Button>
                  <Button.Or />
                  <Button basic color='red'>Story Teller</Button>
                </Button.Group>
              </div>
            </Card.Content>
          </Card>
          <Card color='blue'>
            <Card.Content>
              <Image
                floated='right'
                size='small'
                src={auction}
              />
              <Card.Header>Magic Arena</Card.Header>
              <Card.Meta>Shout out loud</Card.Meta>
              <Card.Description>
                Auction area to buy and sell your best arts and skulptures.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='green'>
                  Enter the Room
          </Button>
              </div>
            </Card.Content>
          </Card>
          <Card color='blue'>
            <Card.Content>
              <Image
                floated='right'
                size='small'
                src={voice}
              />
              <Card.Header>Goosebumps</Card.Header>
              <Card.Meta>Listen our best narrations</Card.Meta>
              <Card.Description>
                When our voice touch your soul.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='green'>
                  Let's Go to the Podium
          </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  };
}

export default ProductHome
