import React, { useState } from "react";
import {Button, ScrollView, View , StyleSheet, Text, Image} from "react-native";
import Constants from 'expo-constants';
const App = () => {
    const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
    const justifyContents = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ];
    const alignItems = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
    const flexWraps = ['wrap', 'nowrap'];
    const directions = ['ltr', 'rtl']
    
    const [flexDirectionIndex, setflexDirection] = useState(0);
    const [justifyContentIndex, setJustifyContent] = useState(0);
    const [alignItemsIndex, setalignItem] = useState(0);
    const [flexWrapIndex, setflexWrap] = useState(0);
    const [directionIndex, setdirection] = useState(0);

    const hookedStyles = {
        flexDirection:flexDirections[flexDirectionIndex],
        justifyContent:justifyContents[justifyContentIndex],
        alignItem:alignItems[alignItemsIndex],
        flexWrap:flexWraps[flexWrapIndex],
        direction:directions[directionIndex],
    }

    const changeSetting = (value, options, setterfunction) => {
        if (value == options.length - 1) {
            setterfunction(0);
        } else {
            setterfunction(value + 1);
        };
        console.log(options[value]);
    }

    const Square = () => {
        const sqStyle = {
            width: 50,
            height: 50,
            backgroundColor: randomHexColor(),
        };
        return <View style={sqStyle} />
    };

    const[squares, setSquares] = useState([Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square(),Square()]);
  
    
    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight}}/>
            <View style={[styles.container, styles.playingSpace, hookedStyles]}>
                {squares.map(elem => elem)}
                
                </View>
            <ScrollView style={[styles.container]}>
                <View style={[styles.controlSpace]}>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX DIRECTION"
                            onPress={() => {
                                console.log("press CHANGE FLEX DIRECTION");
                                changeSetting(flexDirectionIndex, flexDirections, setflexDirection);
                            }
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE JUSTIFY CONTENT"
                            onPress={() => {
                                console.log("press CHANGE JUSTIFY CONTENT");
                                changeSetting(justifyContentIndex, justifyContents, setJustifyContent);
                                }
                            }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE ALIGN ITEMS"
                        onPress={() => {
                            console.log("press CHANGE ALIGN ITEMS")
                            changeSetting(alignItemsIndex, alignItems, setalignItem);
                            }
                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE DIRECTION"
                        onPress={() => {
                            console.log("press CHANGE DIRECTION")
                            changeSetting(directionIndex, directions, setdirection);    
                        }
                    }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="CHANGE FLEX WRAP"
                        onPress={() => {
                            console.log("press CHANGE FLEX WRAP")
                            changeSetting(flexWrapIndex, flexWraps, setflexWrap);
                        }
                    }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="ADD SQUARE"
                        onPress={() => {
                            console.log("press ADD SQUARE")
                            setSquares([...squares, Square()])
                        }

                        }
                        />
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="DELETE SQUARE"
                        onPress={() => {
                            console.log("press DELETE SQUARE")
                            setSquares(squares.filter((v,i) => i != squares.length -1));
                        }
                    }
                        />
                    </View>

             </View>
                

             </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '50%',
    },
    playingSpace: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 3,
    },
    controlSpace: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5F5F5',
    },
    buttonView: {
        width:'50%',
        padding: 10,
    },
    tinylogo: {
        width: 100,
        height: 100,
    },
    

    
})

const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
        return (~~(Math.random() * 16)).toString(16);
    });
}



export default App;