import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts , delBlogPost} = useContext(Context);

    useEffect(() => {
        getBlogPosts();
        navigation.addListener('focus', () => {
            getBlogPosts();
        });
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                    <MaterialIcons name="create" size={30} color="black" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', { id: item.id })}>
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => delBlogPost(item.id)}>
                            <MaterialIcons name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                );
            }}
            ListFooterComponent={() => (
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CreateScreen')}
                    >
                        <Text style={styles.buttonText}>Go to CreateScreen</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'baseline',
        borderTopWidth: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    footer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default IndexScreen;
