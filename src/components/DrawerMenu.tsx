import { CloseIcon, MinusIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DrawerMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='full'>
      <DrawerOverlay />
      <DrawerContent bgColor={'black'}>
        <Button
          position={'absolute'}
          right={0}
          bg={'blackAlpha.700'}
          _hover={{ background: 'blackAlpha.700' }}
          onClick={onClose}
        >
          {isOpen && <CloseIcon color={'white'} fontSize='xl' />}
        </Button>
        <DrawerBody>
          <Container
            fontWeight={'bold'}
            fontSize='3xl'
            color={'white'}
            mt='10%'
          >
            <List spacing={10}>
              <ListItem>
                <Link href='/' passHref>
                  <a onClick={onClose}>
                    <Box>
                      <ListIcon as={MinusIcon} color='#42B2DF' />
                      Home
                    </Box>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/about' passHref>
                  <a onClick={onClose}>
                    <Box>
                      <ListIcon as={MinusIcon} color='#42B2DF' />
                      About
                    </Box>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/ranking' passHref>
                  <a onClick={onClose}>
                    <Box>
                      <ListIcon as={MinusIcon} color='#42B2DF' />
                      Play Score
                    </Box>
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/ranking' passHref>
                  <a onClick={onClose}>
                    <Box>
                      <ListIcon as={MinusIcon} color='#42B2DF' />
                      System
                    </Box>
                  </a>
                </Link>
              </ListItem>
            </List>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};