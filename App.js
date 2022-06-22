/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
	Button,
	SafeAreaView,
	Text,
	View,
} from 'react-native';

const App = () => {

	// 현재 시간 변수 
	const [time, setTime] = useState(null);
	// 타미어 Reference
	const [counterId, setCounterId] = useState(null);
	// 작업 중 상태 구분자 
	const [isLoading, setLoading] = useState(false);

	/**
	 * 시계를 동작 합니다. 
	 * 
	 * setInterval를 호출하고 
	 * 해당 intervalID를 counterId에 저장 합니다. 
	 */
	const startClock = () => {
		const id = setInterval(() => {
			setTime(new Date().toString());
		}, 1000);
		setCounterId(id);
	}

	return (
		<SafeAreaView style={{ flex: 1, }}>
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', margin: 10, }}>
				<View style={{ height:100, flexDirection:'row', alignItems:'center'}}>
					<Text>현재시간 : </Text>
					<View>
						<Text>{time}</Text>
					</View>
				</View>
				<View style={{width:'100%', margin:10,  backgroundColor:'green'}}>
					{(!isLoading)
						?
						<Button
							title='시작'
							style={{flex:1, backgroundColor:'red'}}
							onPress={() => {
								setLoading(true);
								startClock();
							}}
						/>
						:
						<Button
							title='종료'
							color={'green'}
							onPress={() => {
								setLoading(false);
								clearInterval(counterId);
							}}
						/>
					}
				</View>
			</View>


		</SafeAreaView>
	);
};

export default App;
