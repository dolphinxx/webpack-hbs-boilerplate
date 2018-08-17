# A Basic Arpeggiator

# 基础琶音器

In this example, we'll create an arpeggiator which plays the next note in a series on every beat. 

在这个例子中，我们将创建一个每个节拍都会播放序列中的下个音符的琶音器。

### The Synthesizer

### 合成器

Tone.js has a number of instruments, each with nearly the same interface for triggering attacks and releases. Here we'll use [Tone.Synth](https://tonejs.github.io/docs/#SimpleSynth), but you can easily swap the SimpleSynth for any of the other instruments without changing any other code. 

Tone.js 有许多乐器，每个都具有几乎相同的接口，用于触发击打和释放。这里我们将使用[Tone.Synth](https://tonejs.github.io/docs/#SimpleSynth)，但是你可以轻松地将SimpleSynth替换为任何其它乐器而不需要修改其它代码。  

```javascript
var synth = new Tone.Synth();
```

We'll also connect our synth to the [master output](https://tonejs.github.io/docs/#Master) so that we can hear it. 

我们也将synth连接到[master output](https://tonejs.github.io/docs/#Master)以便能够听到它。

```javascript
synth.toMaster();
```

### Triggering Notes

### 触发音符

We can trigger the synth to start the attack portion of the note using `triggerAttack` -- this method takes a note and a time as arguments. To start the release portion of the note, call `triggerRelease`. Read more about using envelopes [here](https://github.com/Tonejs/Tone.js/wiki/Envelope).

我们可以使用`triggerAttack`触发synth启动音符的击打部分——此方法接受一个音符和一个时间作为参数。要启动音符的释放部分，请调用`triggerRelease`。在[这里](https://github.com/Tonejs/Tone.js/wiki/Envelope)阅读更多关于envelopes的信息。

Let's trigger the note `"C4"` then trigger the release a quarter second later (all values are in seconds):

让我们来触发`"C4"`音符然后在四分之一秒之后触发释放（所有数值都是以秒为单位）

```javascript
synth.triggerAttack("C4", time);
synth.triggerRelease(time + 0.25);
```

These two methods are combined into a single call to `triggerAttackRelease` which takes the note as the first argument, the duration as the second, and the start time as the third argument. 

这两个方法合并为一个单独的调用`triggerAttackRelease``，它将音符作为第一个参数，持续时间作为第二个参数，开始时间作为第三个参数。

```javascript
synth.triggerAttackRelease("C4", 0.25, time);
```

### The Arpeggio

### 琶音

Next let's pick a set of notes to arpeggiate over, like a C pentatonic scale. We'll set an interval and get the next note from the array on every loop. If the last argument of `triggerAttackRelease` is ommited, it defaults to the current time.

接下来让我们选取一组音符来进行琶音演奏，例如一个C五声音阶。我们将设置一个间隔，并且在每个循环中从数组中获取下一个音符。如果省略了`triggerAttackRelease`的最后一个参数，则默认为当前时间。

```javascript
var pattern = new Tone.Pattern(function(time, note){
	synth.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"]);
```

[Tone.Pattern](https://tonejs.github.io/docs/#Pattern) will arpeggiate over the given array in a number of different ways (`"up"`, `"down"`, `"upDown"`, `"downUp"`, `"random"` and more). By default the pattern will iterate upward and then loop back to the beginning. 

[Tone.Pattern](https://tonejs.github.io/docs/#Pattern)将以多种不同的方式（`"up"`, `"down"`, `"upDown"`, `"downUp"`, `"random"` 等等）用琶音对给定的数组演奏。

As with all [Event classes](https://github.com/Tonejs/Tone.js/wiki/Events), `time` is passed in as the first argument. This is very important because native Javascript timing is pretty loose. Callbacks scheduled with `setInterval` for example, will happen _around_ the given time, but there is no guarantee on precision; that's not good enough for musical events. 

和所有[Event classes](https://github.com/Tonejs/Tone.js/wiki/Events)一样，`time`作为第一个参数传递进来。这点非常重要因为原生Javascript时序非常宽松。例如，使用`setInterval`调度的回调函数将在给定时间内调用，但不保证精度；这对于音乐活动来说还不够好。

The last thing to do is to start the pattern from the beginning of the Transport timeline. 

最后要做的是在Transport时间轴的开头启动pattern。

```
//begin at the beginning
pattern.start(0);
```

And start the Transport to get the clock going.

启动Transport来让时钟走起来。

```
Tone.Transport.start();
```
