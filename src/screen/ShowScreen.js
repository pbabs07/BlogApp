import React, { useContext, useLayoutEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Context } from '../context/BlogContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);
    const { id } = route.params;
    const [blogPost, setBlogPost] = useState(state.find(blogpost => blogpost.id === id));

    useFocusEffect(
        React.useCallback(() => {
            const updatedBlogPost = state.find(blogpost => blogpost.id === id);
            setBlogPost(updatedBlogPost);
        }, [state])
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', { id })}>
                    <MaterialIcons name="create" size={30} color="black" style={styles.headerIcon} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView> 
        <View style={styles.container}>
            {blogPost ? (
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{blogPost.title}</Text>
                    <Text style={styles.content}>{blogPost.content}</Text>
                </View>
            ) : (
                <Text>Blog post not found</Text>
            )}
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to HomePage"
                    onPress={() => navigation.navigate('HomePage')}
                />
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    contentContainer: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 15,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 18,
    },
    buttonContainer: {
        // position: 'relative',
        // bottom:-5,
        // left: 20,
        // right: 20,
        // margin:'auto',
        // alignItems:'center',
        // flex:1
        
    },
    headerIcon: {
        marginRight: 20,
    },
});

export default ShowScreen;
