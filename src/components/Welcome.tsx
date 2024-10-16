import { Anchor, Text, Title } from '@mantine/core';
import React, { CSSProperties } from 'react';

const Welcome: React.FC = () => {
    const styles: { [key: string]: CSSProperties } = {
        title: {
            fontSize: 100,
        },
    };

    return (
        <>
            <Title style={styles.title} ta="center" mt={100}>
                Welcome to{' '}
                <Text
                    inherit
                    variant="gradient"
                    component="span"
                    gradient={{ from: 'pink', to: 'yellow' }}
                >
                    Mantine
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This starter Vite project includes a minimal setup, if you want to learn more on
                Mantine + Vite integration follow{' '}
                <Anchor href="https://mantine.dev/guides/vite/" size="lg">
                    this guide
                </Anchor>
                .
            </Text>
        </>
    );
};

export default Welcome;
